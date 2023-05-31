import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  users = new BehaviorSubject(null);
  originalUsers: any[] = [];
  filterId: number | null;
  filterLogin: string | null;
  filterType: string | null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<any>('https://api.github.com/users')
      .subscribe(users => {
        this.users.next(users);
        this.originalUsers = users
      });
  }

  
  filterTable(): void {
    if (this.filterId === null && this.filterLogin === null && this.filterType === null) {
      this.users.next(this.originalUsers); // Reset to the original list of users
      return;
    }

    this.users.pipe(take(1)).subscribe(users => {
      if (users) {
        let filteredUsers = this.originalUsers.filter(user => {
          let match = true;

          if (this.filterId && user.id !== this.filterId) {
            match = false;
          }

          if (this.filterLogin && !user.login.toLowerCase().includes(this.filterLogin.toLowerCase())) {
            match = false;
          }

          if (this.filterType && !user.type.toLowerCase().includes(this.filterType.toLowerCase())) {
            match = false;
          }

          return match;
        });

        this.users.next(filteredUsers);
      }
    });
  }
}

